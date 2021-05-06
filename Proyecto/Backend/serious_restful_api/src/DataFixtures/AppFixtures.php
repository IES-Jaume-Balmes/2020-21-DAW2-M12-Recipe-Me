<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Recipe;
use App\Entity\Ingredient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // CARGAMOS INGREDIENTES
        for ($i = 0; $i < 20; $i++) {
            $ingrediente = new Ingredient();
            $ingrediente->setName("Ingrediente $i");
            $manager->persist($ingrediente);
        }

        // CARGAMOS USUARIOS
        for ($i = 0; $i < 20; $i++) {
            $usuario = new User();
            $usuario->setUsername("Usuario $i");
            $usuario->setEmail("usuario$i@recipeme.com");
            $usuario->setPassword('123456');
            $manager->persist($usuario);
        }

        // CARGAMOS RECETAS
        /* for ($i = 0; $i < 20; $i++) {
            $receta = new Recipe();
            $ingredient = new Ingredient();
            $ingredient->setName('pasta');

            $receta->setDescription('Descripcion random');
            $receta->setName('Nombre de la receta');
            $receta->addIngredient($ingredient);
            $manager->persist($receta);
        } */

        $manager->flush();
    }
}
