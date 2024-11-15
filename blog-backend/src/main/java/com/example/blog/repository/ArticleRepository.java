package com.example.blog.repository;

import com.example.blog.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    // 可以添加自定义查询方法
} 