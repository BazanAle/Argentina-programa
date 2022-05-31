/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Persona;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface IPersonaService {
    public List<Persona> obtenerPersona();
    public Persona crearPersona(Persona persona);
    public void borrarPersona(Long id);
    public Persona buscarPersona(Long id);
    public void modificarPersona(Persona persona);
}
