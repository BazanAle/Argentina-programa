/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Experiencia;
import com.portfoliofinal.portfoliofinal.service.IExperienciaService;
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
public class ExperienciaController {
    @Autowired
    private IExperienciaService experienciaServ;
    
    @GetMapping("/experiencia")
    @ResponseBody 
    public List<Experiencia>obtenerExperiencia(){
        return experienciaServ.obtenerExperiencia();
    }
    @PostMapping("/experiencia/crear")
    public Experiencia crearExperiencia(@RequestBody Experiencia experiencia){
        return experienciaServ.crearExperiencia(experiencia);
    }
    @DeleteMapping("/experiencia/{id}")
    public void borrarExperiencia(@PathVariable Long id){
        experienciaServ.borrarExperiencia(id);
    }
    @GetMapping("/experiencia/{id}")
    @ResponseBody
    public Experiencia buscarExperiencia(@PathVariable Long id){
        return experienciaServ.buscarExperiencia(id);
    }
    @PutMapping("/experiencia/update")
    public void modificiarExperiencia(@RequestBody Experiencia experiencia){
        experienciaServ.modificarExperiencia(experiencia);
    }

    
}
