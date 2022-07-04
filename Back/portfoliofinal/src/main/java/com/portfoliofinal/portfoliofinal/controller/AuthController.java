/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Usuario;
import com.portfoliofinal.portfoliofinal.model.dto.UserDto;
import com.portfoliofinal.portfoliofinal.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author alejandrobazan
 */
@RestController
public class AuthController {
    @Autowired
    AuthService service;
    @PostMapping("/login")
    public boolean login(@RequestBody UserDto userDto){
        return service.isUserEnabled(userDto);
    }
    
    @PostMapping("/register")
    public void register(@RequestBody Usuario usuario)throws Exception{
         service.crearUsuario(usuario);
    }
    
    @DeleteMapping("/usuario/{id}")
    public void borrarEducacion(@PathVariable Long id) {
        service.borrarUsuario(id);
    }
}
