package com.example.blog.service;

import com.example.blog.entity.Setting;
import com.example.blog.repository.SettingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SettingService {

    private final SettingRepository settingRepository;

    public Map<String, String> getAllSettings() {
        List<Setting> settings = settingRepository.findAll();
        Map<String, String> settingMap = new HashMap<>();
        settings.forEach(setting -> settingMap.put(setting.getKey(), setting.getValue()));
        return settingMap;
    }

    @Transactional
    public void updateSettings(Map<String, String> settings) {
        settings.forEach((key, value) -> {
            Setting setting = settingRepository.findByKey(key)
                    .orElse(new Setting());
            setting.setKey(key);
            setting.setValue(value);
            settingRepository.save(setting);
        });
    }

    public String getSetting(String key) {
        return settingRepository.findByKey(key)
                .map(Setting::getValue)
                .orElse(null);
    }

    @Transactional
    public void setSetting(String key, String value) {
        Setting setting = settingRepository.findByKey(key)
                .orElse(new Setting());
        setting.setKey(key);
        setting.setValue(value);
        settingRepository.save(setting);
    }
} 