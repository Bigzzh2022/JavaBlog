package com.example.blog.controller;

import com.example.blog.dto.LoginRequest;
import com.example.blog.dto.LoginResponse;
import com.example.blog.dto.RegisterRequest;
import com.example.blog.dto.UserDTO;
import com.example.blog.entity.User;
import com.example.blog.repository.UserRepository;
import com.example.blog.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            if (userRepository.existsByUsername(request.getUsername())) {
                return ResponseEntity.badRequest().body("用户名已存在");
            }

            if (userRepository.existsByEmail(request.getEmail())) {
                return ResponseEntity.badRequest().body("邮箱已被注册");
            }

            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setIsAdmin(false);
            user.setStatus(User.UserStatus.ACTIVE);

            userRepository.save(user);
            return ResponseEntity.ok("注册成功");
        } catch (Exception e) {
            log.error("Registration failed", e);
            return ResponseEntity.badRequest().body("注册失败: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            log.info("Login attempt for email: {}", request.getEmail());
            
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new RuntimeException("用户不存在"));

            if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                throw new RuntimeException("密码错误");
            }

            String token = jwtService.generateToken(user);
            UserDTO userDTO = UserDTO.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .avatar(user.getAvatar())
                    .isAdmin(user.getIsAdmin())
                    .build();

            LoginResponse response = new LoginResponse(token, userDTO);
            
            log.debug("Login response: {}", response);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Login failed", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Auth test endpoint works!");
    }
} 