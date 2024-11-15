package com.example.blog.controller;

import com.example.blog.dto.ArticleDTO;
import com.example.blog.dto.CreateArticleRequest;
import com.example.blog.service.ArticleService;
import com.example.blog.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/articles")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;
    private final AuthService authService;

    @PostMapping
    public ResponseEntity<?> createArticle(@RequestBody CreateArticleRequest request) {
        try {
            log.info("Creating article: {}", request);
            ArticleDTO article = articleService.createArticle(request);
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            log.error("Failed to create article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateArticle(
            @PathVariable Long id,
            @RequestBody CreateArticleRequest request) {
        try {
            log.info("Updating article {}: {}", id, request);
            ArticleDTO article = articleService.updateArticle(id, request);
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            log.error("Failed to update article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getArticle(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(articleService.getArticle(id));
        } catch (Exception e) {
            log.error("Failed to get article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> getArticles(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            return ResponseEntity.ok(articleService.getArticles(keyword, categoryId, status, page, size));
        } catch (Exception e) {
            log.error("Failed to get articles", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long id) {
        try {
            articleService.deleteArticle(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Failed to delete article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{id}/publish")
    public ResponseEntity<?> publishArticle(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(articleService.publishArticle(id));
        } catch (Exception e) {
            log.error("Failed to publish article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{id}/unpublish")
    public ResponseEntity<?> unpublishArticle(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(articleService.unpublishArticle(id));
        } catch (Exception e) {
            log.error("Failed to unpublish article", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
} 