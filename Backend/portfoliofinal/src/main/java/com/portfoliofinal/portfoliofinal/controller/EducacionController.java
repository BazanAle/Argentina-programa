/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Educacion;
import com.portfoliofinal.portfoliofinal.service.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alejandrobazan
 */

@RestController
public class EducacionController {
    
    @Autowired
    private IEducacionService eduServ;
    
    @GetMapping("/educacion")
    @ResponseBody
    public List<Educacion> obtenerEducacion() {
        return eduServ.obtenerEducacion();
    }
    
   
    @PostMapping("/educacion/create")       
    public Educacion crearEducacion (@RequestBody Educacion educacion){
        return eduServ.crearEducacion(educacion);
}
    
    
    @DeleteMapping("/educacion/{id}")
    public void borrarEducacion(@PathVariable Long id) {
        eduServ.borrarEducacion(id);
    }
    
    @GetMapping("/educacion/{id}")
    @ResponseBody
    public Educacion buscarEducacion(@PathVariable Long id) {
        return eduServ.buscarEducacion(id);
    }
    
    @PutMapping("/educacion/update")
    public void modificarEducacion(@RequestBody Educacion educacion) {
        eduServ.modificarEducacion(educacion);
    }
    
}
