package com.example.blog.service;

import com.example.blog.dto.ArticleDTO;
import com.example.blog.dto.CreateArticleRequest;
import com.example.blog.entity.Article;
import com.example.blog.entity.Category;
import com.example.blog.entity.Tag;
import com.example.blog.entity.User;
import com.example.blog.repository.ArticleRepository;
import com.example.blog.repository.CategoryRepository;
import com.example.blog.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final CategoryRepository categoryRepository;
    private final TagRepository tagRepository;
    private final AuthService authService;

    @Transactional
    public ArticleDTO createArticle(CreateArticleRequest request) {
        User currentUser = authService.getCurrentUser();
        Article article = new Article();
        updateArticleFromRequest(article, request);
        article.setAuthor(currentUser);
        article.setStatus(Article.ArticleStatus.valueOf(request.getStatus().toUpperCase()));
        return convertToDTO(articleRepository.save(article));
    }

    @Transactional
    public ArticleDTO updateArticle(Long id, CreateArticleRequest request) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        updateArticleFromRequest(article, request);
        article.setStatus(Article.ArticleStatus.valueOf(request.getStatus().toUpperCase()));
        return convertToDTO(articleRepository.save(article));
    }

    private void updateArticleFromRequest(Article article, CreateArticleRequest request) {
        article.setTitle(request.getTitle());
        article.setContent(request.getContent());
        article.setSummary(request.getSummary());
        article.setCover(request.getCover());
        
        if (request.getCategoryId() != null && !request.getCategoryId().isEmpty()) {
            try {
                Long categoryId = Long.parseLong(request.getCategoryId());
                Category category = categoryRepository.findById(categoryId)
                        .orElseThrow(() -> new RuntimeException("分类不存在"));
                article.setCategory(category);
            } catch (NumberFormatException e) {
                throw new RuntimeException("无效的分类ID");
            }
        }

        if (request.getTags() != null) {
            Set<Tag> tags = request.getTags().stream()
                    .map(name -> tagRepository.findByName(name)
                            .orElseGet(() -> {
                                Tag tag = new Tag();
                                tag.setName(name);
                                return tagRepository.save(tag);
                            }))
                    .collect(Collectors.toSet());
            article.setTags(tags);
        }

        if (request.getStatus() != null) {
            try {
                article.setStatus(Article.ArticleStatus.valueOf(request.getStatus().toUpperCase()));
            } catch (IllegalArgumentException e) {
                throw new RuntimeException("无效的文章状态");
            }
        }
    }

    public ArticleDTO getArticle(Long id) {
        return convertToDTO(articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在")));
    }

    public Page<ArticleDTO> getArticles(String keyword, Long categoryId, String status, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Article> articles = articleRepository.findAll(pageable);
        return articles.map(this::convertToDTO);
    }

    @Transactional
    public void deleteArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        article.setStatus(Article.ArticleStatus.DELETED);
        articleRepository.save(article);
    }

    @Transactional
    public ArticleDTO publishArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        article.setStatus(Article.ArticleStatus.PUBLISHED);
        return convertToDTO(articleRepository.save(article));
    }

    @Transactional
    public ArticleDTO unpublishArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        article.setStatus(Article.ArticleStatus.DRAFT);
        return convertToDTO(articleRepository.save(article));
    }

    private ArticleDTO convertToDTO(Article article) {
        return ArticleDTO.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .summary(article.getSummary())
                .cover(article.getCover())
                .author(article.getAuthor().getUsername())
                .authorAvatar(article.getAuthor().getAvatar())
                .category(article.getCategory() != null ? article.getCategory().getName() : null)
                .tags(article.getTags().stream().map(Tag::getName).collect(Collectors.toSet()))
                .status(article.getStatus().name())
                .views(article.getViews())
                .likes(article.getLikes())
                .comments(article.getCommentsCount())
                .createdAt(article.getCreatedAt())
                .updatedAt(article.getUpdatedAt())
                .build();
    }
} 