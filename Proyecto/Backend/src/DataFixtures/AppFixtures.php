<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
require_once 'vendor/autoload.php';

class AppFixtures extends Fixture
{
    private $faker;

    public const USER_REFERENCE = 'user-';

    public function load(ObjectManager $manager)
    {
        //CARGAMOS ADMINS
        $administradores = [
            'frank' => '26253c50741faa9c2e2b836773c69fe6',
            'kevin' => '9d5e3ecdeb4cdb7acfd63075ae046672',
            'sergi' => '8b8d481c6dcdbd24b4e43825c5345309',
        ];
        foreach ($administradores as $admin => $password) {
            $usuario = new User();
            $usuario->setUsername($admin);
            $usuario->setEmail("$admin@recipeme.com");
            $usuario->setPassword($password);
            $usuario->setRoles(['ROLE_ADMIN']);
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
            $this->addReference(self::USER_REFERENCE . $i, $usuario);
        }

        $manager->flush();
    }
}
