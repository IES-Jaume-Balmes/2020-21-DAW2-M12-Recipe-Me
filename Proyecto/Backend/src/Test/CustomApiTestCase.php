<?php

namespace App\Test;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\Client;
use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

abstract class CustomApiTestCase extends ApiTestCase
{
    protected function createUser(string $email, string $password): User
    {
        $user = new User();
        $user->setEmail($email);
        $user->setName(substr($email, 0, strpos($email, '@')));

        $encoded = self::$container
            ->get('security.password_encoder')
            ->encodePassword($user, $password);
        $user->setPassword($encoded);

        $em = self::$container->get('doctrine')->getManager();
        $em->persist($user);
        $em->flush();

        return $user;
    }

    protected function logIn(Client $client, string $email, string $password)
    {
        $response = $client->request('GET', '/api/login_check', [
            'json' => [
                'email' => $email,
                'password' => $password,
            ],
        ]);

        // $this->assertEquals(200, $response->getStatusCode());
        // $this->asserter()->assertResponsePropertyExists(
        //     $response,
        //     'token'
        // );

        $this->assertResponseStatusCodeSame(200);
    }

    protected function createUserAndLogIn(
        Client $client,
        string $email,
        string $password
    ): User {
        $user = $this->createUser($email, $password);
        $this->logIn($client, $email, $password);
        return $user;
    }

    protected function getEntityManager(): EntityManagerInterface
    {
        return self::$container->get('doctrine')->getManager();
    }
}
