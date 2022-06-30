package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Skill;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface ISkillService {

    public List<Skill> obtenerSkill();
    public Skill crearSkill(Skill skill);
    public void borrarSkill(Long id);
    public Skill buscarSkill(Long id);
    public void modificarSkill(Skill skill);
}

