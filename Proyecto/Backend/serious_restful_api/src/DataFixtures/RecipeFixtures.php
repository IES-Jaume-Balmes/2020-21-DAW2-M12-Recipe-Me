<?php

namespace App\DataFixtures;

use App\Entity\Recipe;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class RecipeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // CARGAMOS RECETAS
        for ($i = 0; $i < 5; $i++) {
            $faker = \Faker\Factory::create();
            $faker->addProvider(
                new \FakerRestaurant\Provider\en_US\Restaurant($faker)
            );
            $receta = new Recipe();
            $receta->setDescription($faker->text($maxNbChars = 90));
            $receta->setName($faker->foodName());
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
