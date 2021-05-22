<?php

namespace App\tests\Functional;

use App\Test\CustomApiTestCase;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class RecipeListingResourceTest extends CustomApiTestCase
{
    use ReloadDatabaseTrait;

    public function testCreateRecipe()
    {
        $client = self::createClient();

        $client->request('GET', '/api/lista_compras', [
            'headers' => ['Content-Type' => 'application/json'],
        ]);
        $this->assertResponseStatusCodeSame(200);

        $this->createUserAndLogIn($client, 'sergol@recipeme.com', 'sergi');
    }
}
