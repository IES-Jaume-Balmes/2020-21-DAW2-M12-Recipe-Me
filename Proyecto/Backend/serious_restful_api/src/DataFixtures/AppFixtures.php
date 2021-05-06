<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Recipe;
use App\Entity\Ingredient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
require_once 'vendor/autoload.php';

class AppFixtures extends Fixture
{
    private $faker;

    public function load(ObjectManager $manager)
    {
        // CARGAMOS INGREDIENTES
        for ($i = 0; $i < 20; $i++) {
            $ingrediente = new Ingredient();
            $ingrediente->setName("Ingrediente $i");
            $manager->persist($ingrediente);
        }

        //NOS CARGAMOS
        $administradores = ['Frank', 'Kevin', 'Sergi'];
        foreach ($administradores as $admin) {
            $usuario = new User();
            $usuario->setUsername($admin);
            $usuario->setEmail("$admin@recipeme.com");
            $usuario->setPassword("$admin");
            $manager->persist($usuario);
        }

        // CARGAMOS OTROS USUARIOS
        for ($i = 0; $i < 5; $i++) {
            $this->faker = Factory::create();
            $usuario = new User();
            $usuario->setUsername($this->faker->name);
            $usuario->setEmail($this->faker->email);
            $usuario->setPassword($this->faker->password);
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
