package com.praxis.controller;

import com.praxis.model.Usuario;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/usuario")
    public Usuario usuario() {

        return new Usuario(
                1L,
                "Renata",
                "renata@email.com",
                100
        );
    }

    @GetMapping("/usuarios")
    public List<Usuario> usuarios() {

        return List.of(
                new Usuario(1L, "Renata", "renata@email.com", 100),
                new Usuario(2L, "Joao", "joao@email.com", 250),
                new Usuario(3L, "Maria", "maria@email.com", 500)
        );
    }
