package com.example.blog.controller;

import com.example.blog.service.SettingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/settings")
@RequiredArgsConstructor
public class SettingController {

    private final SettingService settingService;

    @GetMapping
    public ResponseEntity<Map<String, String>> getAllSettings() {
        return ResponseEntity.ok(settingService.getAllSettings());
    }

    @PutMapping
    public ResponseEntity<Void> updateSettings(@RequestBody Map<String, String> settings) {
        settingService.updateSettings(settings);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{key}")
    public ResponseEntity<String> getSetting(@PathVariable String key) {
        String value = settingService.getSetting(key);
        return value != null ? ResponseEntity.ok(value) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{key}")
    public ResponseEntity<Void> setSetting(@PathVariable String key, @RequestBody String value) {
        settingService.setSetting(key, value);
        return ResponseEntity.ok().build();
    }
} 