package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Skill;
import com.portfoliofinal.portfoliofinal.repository.SkillRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandrobazan
 */
@Service
public class SkillService implements ISkillService{
    @Autowired
    public SkillRepository skillRepo;
    @Override

    public List<Skill> obtenerSkill() {
      return skillRepo.findAll();
    }

    @Override
    public Skill crearSkill(Skill skill) {
       return skillRepo.save(skill);
    }

    @Override
    public void borrarSkill(Long id) {
        skillRepo.deleteById(id);
    }

    @Override
    public Skill buscarSkill(Long id) {
        return skillRepo.findById(id).orElse(null);
    }

    @Override
    public void modificarSkill(Skill skill) {
       skillRepo.save(skill);
    }


}