/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Experiencia;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface IExperienciaService {
    
    public List<Experiencia> obtenerExperiencia();
    public Experiencia crearExperiencia(Experiencia experiencia);
    public void borrarExperiencia(Long id);
    public Experiencia buscarExperiencia(Long id);
    public void modificarExperiencia(Experiencia experiencia);
}
