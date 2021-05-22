<?php

namespace App\tests\Functional;

use App\Entity\ListaCompra;
use App\Test\CustomApiTestCase;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class RecipeListingResourceTest extends CustomApiTestCase
{
    use ReloadDatabaseTrait;

    public function testCreateRecipe()
    {
        $client = self::createClient();

        $this->createUserAndLogIn($client, 'sergol@recipeme.com', 'sergi');

        $client->request('GET', '/api/recipes', [
            'headers' => ['Content-Type' => 'application/json'],
        ]);

        $this->assertResponseStatusCodeSame(200);
    }

    public function testUpdateCheeseListing()
    {
        // $client = self::createClient();
        // $user = $this->createUser('recipeme@example.com', 'foo');

        // $listaCompra = new ListaCompra();
        // $listaCompra->setPropietario($user);
        // $listaCompra->setName('Lista de Navidad');

        // $em = $this->getEntityManager();
        // $em->persist($listaCompra);
        // $em->flush();

        // $this->logIn($client, 'recipeme@example.com', 'foo');
        // $client->request(
        //     'POST',
        //     '/api/lista_compras/' . $listaCompra->getId(),
        //     [
        //         'json' => [
        //             'propietario' => '',
        //             'name' => '',
        //             'ingredients' => [''],
        //         ],
        //     ]
        // );
        // $this->assertResponseStatusCodeSame(201);
    }
}
