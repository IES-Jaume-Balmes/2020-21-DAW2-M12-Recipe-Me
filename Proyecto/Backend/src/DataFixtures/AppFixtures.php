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
            'frank' =>
                '$argon2id$v=19$m=65536,t=4,p=1$DA9CKHKdwC64prui1eozrA$5FvVjljuE84X6Z86Ec/4NRWRHUWjkVlifo+h1RQCueQ',
            'kevin' =>
                '$argon2id$v=19$m=65536,t=4,p=1$3tOBJthGX124W5ifeh55QA$TOaQoojWBGzVmdrvRdRans/71kBnzJI4D8GP9ZGXcQ8',
            'sergi' =>
                '$argon2id$v=19$m=65536,t=4,p=1$j03sW8c4FrXCJeAGYldKFA$dgUX970UATBgSu7zKuA8fMDr+zsVGhqq6nx9i0Jhxdk',
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
