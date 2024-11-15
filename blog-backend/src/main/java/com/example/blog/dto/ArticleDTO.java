package com.example.blog.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Builder
public class ArticleDTO {
    private Long id;
    private String title;
    private String content;
    private String summary;
    private String cover;
    private String author;
    private String authorAvatar;
    private String category;
    private Set<String> tags;
    private String status;
    private Integer views;
    private Integer likes;
    private Integer comments;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
} 