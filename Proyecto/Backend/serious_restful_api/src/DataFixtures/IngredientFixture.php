<?php

namespace App\DataFixtures;

use App\Entity\Ingredient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class IngredientFixture extends Fixture
{
    public const INGREDIENT_REFERENCE = 'ingredient-';

    public function load(ObjectManager $manager)
    {
        // CARGAMOS INGREDIENTES
        for ($i = 0; $i < 40; $i++) {
            $ingrediente = new Ingredient();
            $ingrediente->setName("Ingrediente $i");
            $manager->persist($ingrediente);
            $this->addReference(self::INGREDIENT_REFERENCE . $i, $ingrediente);
        }
        $manager->flush();
    }
}
