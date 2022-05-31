/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Persona;
import com.portfoliofinal.portfoliofinal.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author alejandrobazan
 */
@RestController


public class PersonaController {
    
    @Autowired
    private IPersonaService persoServ;
    
    @GetMapping("/persona")
    @ResponseBody
    public List<Persona> obtenerPersona(){
        return persoServ.obtenerPersona();
    }
    @PostMapping("/persona/create")
    public Persona crearPersona(@RequestBody Persona persona){
       return persoServ.crearPersona(persona);
    }
    
    @DeleteMapping("/persona/{id}")
    public void borrarPersona(@PathVariable Long id){
        persoServ.borrarPersona(id);
    }
    @GetMapping("/persona/{id}")
    @ResponseBody
    public Persona buscarPersona(@PathVariable Long id){
        return persoServ.buscarPersona(id);
    }
            
    @PutMapping("/persona/update")
    public void modificarPersona(@RequestBody Persona persona){
        persoServ.modificarPersona(persona);
    }
    
}
