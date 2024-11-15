package com.example.blog.controller;

import com.example.blog.entity.Notification;
import com.example.blog.repository.NotificationRepository;
import com.example.blog.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationRepository notificationRepository;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<?> getNotifications() {
        Long userId = authService.getCurrentUserId();
        return ResponseEntity.ok(notificationRepository.findByUserIdOrderByCreatedAtDesc(userId));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<?> markAsRead(@PathVariable Long id) {
        Notification notification = notificationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("通知不存在"));
            
        notification.setIsRead(true);
        notificationRepository.save(notification);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/unread-count")
    public ResponseEntity<?> getUnreadCount() {
        Long userId = authService.getCurrentUserId();
        return ResponseEntity.ok(notificationRepository.countByUserIdAndIsReadFalse(userId));
    }
} 