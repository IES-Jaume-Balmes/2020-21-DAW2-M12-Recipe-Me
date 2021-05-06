<?php

namespace App\DataFixtures;

use App\Entity\ListaCompra;
use App\Entity\Recipe;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class ListaFixtures extends Fixture implements DependentFixtureInterface
{
    private $faker;

    public const LISTA_REFERENCE = 'lista-';

    public function load(ObjectManager $manager)
    {
        // CARGAMOS RECETAS
        for ($i = 0; $i < 5; $i++) {
            $this->faker = Factory::create();

            $lista = new ListaCompra();
            $lista->setName($this->faker->firstNameMale);
            $lista->setCreatedAt(new \DateTime());
            for ($n = 0; $n < 20; $n++) {
                $lista->addIngredient(
                    $this->getReference('ingredient-' . random_int(0, 39))
                );
            }
            $lista->setPropietario(
                $this->getReference('user-' . random_int(0, 4))
            );
            $this->addReference(self::LISTA_REFERENCE . $i, $lista);
            $manager->persist($lista);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [IngredientFixture::class];
    }
}
