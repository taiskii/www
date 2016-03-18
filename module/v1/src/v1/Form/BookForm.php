<?php

/**
 * Валидация полей книги
 */

namespace v1\Form;


use Zend\Form\Form;

class BookForm extends Form
{
    public function __construct()
    {
        parent::__construct();

        $this->add(array(
            'name' => 'author',
            'type' => 'text'
        ));

        $this->add(array(
            'name' => 'name',
            'type' => 'text'
        ));

        $this->add(array(
            'name' => 'snippet',
            'type' => 'textarea'
        ));

        $this->add(array(
            'name' => 'datePublished',
            'type' => 'text'
        ));

        $this->add(array(
            'name' => 'imageUrl',
            'type' => 'text'
        ));

        $this->getInputFilter()
            ->add(array(
                'name' => 'author',
                'required' => true,
                'validators' => array(
                    array('name' => 'notEmpty')
                )
            ))->add(array(
                'name' => 'name',
                'required' => true,
                'validators' => array(
                    array('name' => 'notEmpty')
                )
            ))->add(array(
                'name' => 'datePublished',
                'required' => false,
                'validators' => array(
                    array('name' => 'digits')
                )
            ))->add(array(
                'name' => 'snippet',
                'required' => true,
                'validators' => array(
                    array('name' => 'notEmpty')
                )
            ))->add(array(
                'name' => 'imageUrl',
                'required' => false,
                'validators' => array(
                    array('name' => 'notEmpty')
                )
            ));
    }

    public function getErrors() {
        $result = array();

        foreach($this->getMessages() as $key => $errors) {
            $result[$key] = reset($errors);
        }

        return $result;
    }
}