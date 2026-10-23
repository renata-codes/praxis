package com.praxis.model;

public class Usuario {

    private Long id;
    private String nome;
    private String email;
    private Integer xp;

    public Usuario(Long id, String nome, String email, Integer xp) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.xp = xp;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public Integer getXp() {
        return xp;
    }
}