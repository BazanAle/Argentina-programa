/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Skill;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface ISkillService {
    
    public List<Skill> obtenerSkill();
    public void crearSkill(Skill skill);
    public void borrarSkill(Long id);
    public Skill buscarSkill(Long id);
    public void modificarSkill(Skill skill);
}


