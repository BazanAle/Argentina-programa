
package com.miportfolio.Springboot.controller;

import com.miportfolio.Springboot.model.Educacion;
import com.miportfolio.Springboot.service.IEducacionService;
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
    public void crearEducacion(@RequestBody Educacion educacion){
        eduServ.crearEducacion(educacion);
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
    public void modificarEducacion(Educacion educacion) {
        eduServ.modificarEducacion(educacion);
    }
    
}
