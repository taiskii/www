<?php

/*
  Document   : IndexController
  Created on : 28.10.2013, 11:37:11
  Author     : cawa
  Description:
  Index controller
 */

namespace v1\Controller;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\EntityManager;
use v1\Entity\Book;
use v1\Form\BookForm;
use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;
use Zend\Mvc\MvcEvent;
use Exception;

class BooksController extends AbstractRestfulController
{
    /**
     * @var EntityRepository
     */
    private $entity;

    /**
     * @var EntityManager
     */
    private $em;

    public function onDispatch(MvcEvent $e)
    {
        $this->em = $this->getServiceLocator()->get('doctrine.entitymanager.orm_default');
        $this->entity = $this->em->getRepository('v1\Entity\Book');
        parent::onDispatch($e);
    }

    public function getList()
    {
        $list = array();

        /** @var Book $entity */
        foreach ($this->entity->findAll() as $entity) {
            $list[] = $entity->asArray();
        }

        return new JsonModel($list);
    }

    public function create($data)
    {
        $form = new BookForm();
        $form->setData($data);

        if ($form->isValid()) {
            $object = new Book();
			//print_r($form->getData());die;
            $object->populate($form->getData());
            $this->em->persist($object);
            $this->em->flush();
            $result = array('response' => $object->getId());
        } else {
            $result = array('errors' => $form->getErrors());
        }

        return new JsonModel($result);
    }

    public function update($id, $data)
    {
        /** @var Book $object */
        if ($object = $this->entity->find($id)) {
            $data += $object->asArray();
            $form = new BookForm();
            $form->setData($data);

            if ($form->isValid()) {
                $object->populate($form->getData());
                $this->em->persist($object);
                $this->em->flush();
                $result = array('response' => 'ok');
            } else {
                $result = array('errors' => $form->getErrors());
            }
        } else {
            $result = array('errors' => array('id' => 'Does not exist'));
        }

        return new JsonModel($result);
    }

    public function delete($id)
    {
		$id or $id = $this->params()->fromQuery('id');
		try{
			$this->em->remove($this->entity->find($id));
			$this->em->flush();
			$result = array('response' => 'ok');
		} catch (Exception $e) {
			$result = array('errors' => array('id' => 'Bad value'));
		}

        return new JsonModel($result);

    }

}
