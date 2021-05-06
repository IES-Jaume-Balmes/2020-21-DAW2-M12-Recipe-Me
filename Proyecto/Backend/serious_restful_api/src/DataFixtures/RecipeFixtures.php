<?php

namespace App\DataFixtures;

use App\Entity\Recipe;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class RecipeFixtures extends Fixture implements DependentFixtureInterface
{
    private $faker;

    public function load(ObjectManager $manager)
    {
        // CARGAMOS RECETAS
        for ($i = 0; $i < 5; $i++) {
            $this->faker = Factory::create();
            $receta = new Recipe();
            $receta->setDescription('random description');
            $receta->setName($this->faker->firstNameMale);
            for ($n = 0; $n < 4; $n++) {
                $receta->addIngredient(
                    $this->getReference('ingredient-' . random_int(0, 19))
                );
            }

            $manager->persist($receta);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [IngredientFixture::class];
    }
}
