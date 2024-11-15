package com.example.blog.dto;

import lombok.Data;

import java.util.Set;

@Data
public class CreateArticleRequest {
    private String title;
    private String content;
    private String summary;
    private String cover;
    private String categoryId;
    private Set<String> tags;
    private String status;
} 