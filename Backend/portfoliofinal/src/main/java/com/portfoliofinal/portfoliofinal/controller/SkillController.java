package com.portfoliofinal.portfoliofinal.controller;

import com.portfoliofinal.portfoliofinal.model.Skill;
import com.portfoliofinal.portfoliofinal.service.ISkillService;
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
public class SkillController {
    @Autowired
    private ISkillService skillServ;

    @GetMapping("/skill")
    @ResponseBody
    public List<Skill> obtenerSkill(){
        return skillServ.obtenerSkill();
    }
    @PostMapping("/skill/create")
    public Skill crearSkill(@RequestBody Skill skill){
        return skillServ.crearSkill(skill);
    }

    @DeleteMapping("/skill/{id}")
    public void borrarSkill(@PathVariable Long id){
        skillServ.borrarSkill(id);
    }
    @GetMapping("/skill/{id}")
    @ResponseBody
    public Skill buscarSkill(@PathVariable Long id){
        return skillServ.buscarSkill(id);
    }

    @PutMapping("/skill/update")
    public void modificarSkill(@RequestBody Skill skill){
        skillServ.modificarSkill(skill);
    }
}