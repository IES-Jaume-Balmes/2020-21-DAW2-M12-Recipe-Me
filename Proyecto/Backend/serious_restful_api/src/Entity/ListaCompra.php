<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ListaCompraRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      normalizationContext={"groups"={"lista_compra:read"}},
 *      denormalizationContext={"groups"={"lista_compra:write"}},
 * )
 * @ORM\Entity(repositoryClass=ListaCompraRepository::class)
 */
class ListaCompra
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="listaCompras")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"lista_compra:read", "lista_compra:write", "user:read"})
     */
    private $propietario;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lista_compra:read", "lista_compra:write", "user:read"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"lista_compra:read", "lista_compra:write", "user:read"})
     */
    private $createdAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPropietario(): ?User
    {
        return $this->propietario;
    }

    public function setPropietario(?User $propietario): self
    {
        $this->propietario = $propietario;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
