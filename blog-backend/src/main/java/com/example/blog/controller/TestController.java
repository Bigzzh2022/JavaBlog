package com.example.blog.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

    private final JdbcTemplate jdbcTemplate;

    @GetMapping("/server")
    public Map<String, String> testServer() {
        Map<String, String> result = new HashMap<>();
        result.put("status", "ok");
        result.put("message", "Server is running");
        return result;
    }

    @GetMapping("/db")
    public Map<String, Object> testDatabase() {
        Map<String, Object> result = new HashMap<>();
        try {
            // 测试数据库连接
            String dbVersion = jdbcTemplate.queryForObject("SELECT VERSION()", String.class);
            // 测试用户表
            Integer userCount = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Integer.class);
            
            result.put("status", "ok");
            result.put("dbVersion", dbVersion);
            result.put("userCount", userCount);
            result.put("message", "Database connection successful");
            
            log.info("Database test successful. Version: {}, User count: {}", dbVersion, userCount);
        } catch (Exception e) {
            result.put("status", "error");
            result.put("message", "Database connection failed: " + e.getMessage());
            log.error("Database test failed", e);
        }
        return result;
    }

    @GetMapping("/all")
    public Map<String, Object> testAll() {
        Map<String, Object> result = new HashMap<>();
        
        // 测试服务器
        result.put("server", testServer());
        
        // 测试数据库
        result.put("database", testDatabase());
        
        return result;
    }
} 