<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ListaCompraRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      normalizationContext={"groups"={"lista_compra:read"}},
 *      denormalizationContext={"groups"={"lista_compra:write"}},
 *      collectionOperations={
 *          "get"={"security"="is_granted('ROLE_ADMIN')"},
 *          "post"={"security_post_denormalize"="is_granted('ROLE_USER') and object.getPropietario() == user"}
 *      },
 *      itemOperations={
 *          "get"={"security"="is_granted('ROLE_ADMIN')"},
 *          "delete"={"security"="is_granted('ROLE_USER') and object.getPropietario() == user"}
 *      }
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
     * @Groups({"lista_compra:read", "lista_compra:write"})
     */
    private $propietario;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lista_compra:read", "lista_compra:write"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"lista_compra:read","lista_compra:write"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToMany(targetEntity=Ingredient::class)
     * @Groups({"lista_compra:read", "lista_compra:write"})
     */
    private $ingredients;

    public function __construct()
    {
        $this->createdAt = new DateTime();
        $this->ingredients = new ArrayCollection();
    }

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

    /**
     * @return Collection|Ingredient[]
     */
    public function getIngredients(): Collection
    {
        return $this->ingredients;
    }

    public function addIngredient(Ingredient $ingredient): self
    {
        if (!$this->ingredients->contains($ingredient)) {
            $this->ingredients[] = $ingredient;
        }

        return $this;
    }

    public function removeIngredient(Ingredient $ingredient): self
    {
        $this->ingredients->removeElement($ingredient);

        return $this;
    }
}
