<?php

/**
 * Конфиг модуля v1
 *
 * @author cawa
 */

namespace v1;

return array(
    'router' => array(
        'routes' => array(
            'books' => array(
                'type' => 'Segment',
                'options' => array(
                    'route' => '/books[/:id]',
                    'constraints' => array(
                        'id' => '[0-9]*/?',
                    ),
                    'defaults' => array(
                        '__NAMESPACE__' => 'v1\Controller',
                        'controller' => 'v1\Controller\Books'
                    ),
                ),
            ),
        ),
    ),
    'controllers' => array(
        'invokables' => array(
            'v1\Controller\Books' => 'v1\Controller\BooksController',
        ),
    ),
    'view_manager' => array(
        'strategies' => array(
            'ViewJsonStrategy',
        ),
        'display_not_found_reason' => true,
        'display_exceptions' => true,
        'doctype' => 'HTML5'
    ),
    'doctrine' => array(
        'driver' => array(
            __NAMESPACE__ . '_driver' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(__DIR__ . '/../src/' . __NAMESPACE__ . '/Entity')
            ),
            'orm_default' => array(
                'drivers' => array(
                    __NAMESPACE__ . '\Entity' => __NAMESPACE__ . '_driver'
                )
            )
        ),
    ),
    // Placeholder for console routes
    'console' => array(
        'router' => array(
            'routes' => array(
            ),
        ),
    ),
);
