<?php

namespace v1\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Test Entity
 *
 * @ORM\Table(name="books")
 * @ORM\Entity
 */
class Book
{

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string(255)
     * @ORM\Column(name="imageUrl", type="string", nullable=false)
     */
    private $imageUrl;

    /**
     * @var string(255)
     * @ORM\Column(name="name", type="string", nullable=false)
     */
    private $name;

    /**
     * @var string(255)
     * @ORM\Column(name="snippet", type="text", nullable=false)
     */
    private $snippet;

    /**
     * @var string(255)
     * @ORM\Column(name="author", type="string", nullable=false)
     */
    private $author;

    /**
     * @var string(255)
     * @ORM\Column(name="date_published", type="integer", nullable=false)
     */
    private $date_published;

    // object => array
    public function asArray(){

        return get_object_vars($this);
    }

    /**
     * @param array $data
     * @return $this
     */
    public function populate($data = array()) {

        foreach ($data as $k => $v) {
            $method = 'set' . ucfirst($k);
            $this->$method($v);
        }

        return $this;
    }

    /**
     * Set imageUrl
     *
     * @return Book
     */
    public function setImageUrl($value = null)
    {
        $this->imageUrl = $value;

        return $this;
    }

    /**
     * Set name
     *
     * @return Book
     */
    public function setName($value = null)
    {
        $this->name = $value;

        return $this;
    }

    /**
     * Set snippet
     *
     * @return Book
     */
    public function setSnippet($value = null)
    {
        $this->snippet = $value;

        return $this;
    }

    /**
     * Set author
     *
     * @return Book
     */
    public function setAuthor($value = null)
    {
        $this->author = $value;

        return $this;
    }

    /**
     * Set date_published
     *
     * @return Book
     */
    public function setDatePublished($value = null)
    {
        $this->date_published = $value;

        return $this;
    }

    /**
     * Get
     * @return string(255)
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get name
     * @return string(255)
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get author
     * @return string(255)
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Get snippet
     * @return string
     */
    public function getSnippet()
    {
        return $this->snippet;
    }

    /**
     * Get imageUrl
     * @return string(255)
     */
    public function getImageUrl()
    {
        return $this->imageUrl;
    }

    /**
     * Get date_published
     * @return string(255)
     */
    public function getDatePublished()
    {
        return $this->date_published;
    }
}
