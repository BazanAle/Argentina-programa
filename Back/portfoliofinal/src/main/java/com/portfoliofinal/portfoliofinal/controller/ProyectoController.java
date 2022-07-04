/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Proyecto;
import com.portfoliofinal.portfoliofinal.service.IProyectoService;
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
public class ProyectoController {
    @Autowired
    private IProyectoService proyectoServ;
    
    @GetMapping("/proyecto")
    @ResponseBody
    public List<Proyecto>obtenerExperiencia(){
        return proyectoServ.obtenerProyecto();
    }
    @PostMapping("/proyecto/crear")
    public Proyecto crearProyecto(@RequestBody Proyecto proyecto){
        return proyectoServ.crearProyecto(proyecto);
    }
    @DeleteMapping("/proyecto/{id}")
    public void borrarProyecto(@PathVariable Long id){
        proyectoServ.borrarProyecto(id);
    }
    @GetMapping("/proyecto/{id}")
    @ResponseBody
    public Proyecto buscarProyecto(@PathVariable Long id){
        return proyectoServ.buscarProyecto(id);
    }
    @PutMapping("/proyecto/update")
    public void modificarProyecto(@RequestBody Proyecto proyecto){
        proyectoServ.modificarProyecto(proyecto);
    }

}
