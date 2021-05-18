<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use ApiPlatform\Core\Api\IriConverterInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login", methods={"POST"})
     */
    public function login(IriConverterInterface $iriConverter)
    {
        if (!$this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->json(
                [
                    'error' =>
                        'Invalid login request: check that the Content-Type header is "application/json".',
                ],
                400
            );
        }

        // return $this->json([
        //     'user' => $this->getUser() ? $this->getUser()->getId() : null,
        // ]);

        if ($this->getUser()) {
            return $this->json([
                'user' => $this->getUser()->getId(),
                'username' => $this->getUser()->getUsername(),
            ]);
        }
        // return new Response(null, 204, [
        //     'Location' => $iriConverter->getIriFromItem($this->getUser()),
        // ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('should not be reached');
    }
}
