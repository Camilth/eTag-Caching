package org.example.red.controller;

import org.example.red.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<String>> getAllProducts() {
        List<String> products = productService.getProducts();
        return ResponseEntity.ok(products);
    }

    @PostMapping
    public ResponseEntity<List<String>> addProduct(@RequestBody String product) {
        List<String> products = productService.addItem(product);
        return ResponseEntity.status(201).body(products);
    }
}
