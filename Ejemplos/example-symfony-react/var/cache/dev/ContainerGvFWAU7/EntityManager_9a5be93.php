<?php

namespace ContainerGvFWAU7;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder81377 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer92bd3 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties177fc = [
        
    ];

    public function getConnection()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getConnection', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getMetadataFactory', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getExpressionBuilder', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'beginTransaction', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getCache', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getCache();
    }

    public function transactional($func)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'transactional', array('func' => $func), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->transactional($func);
    }

    public function commit()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'commit', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->commit();
    }

    public function rollback()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'rollback', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getClassMetadata', array('className' => $className), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'createQuery', array('dql' => $dql), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'createNamedQuery', array('name' => $name), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'createQueryBuilder', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'flush', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'clear', array('entityName' => $entityName), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->clear($entityName);
    }

    public function close()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'close', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->close();
    }

    public function persist($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'persist', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'remove', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'refresh', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'detach', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'merge', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getRepository', array('entityName' => $entityName), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'contains', array('entity' => $entity), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getEventManager', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getConfiguration', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'isOpen', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getUnitOfWork', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getProxyFactory', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'initializeObject', array('obj' => $obj), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'getFilters', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'isFiltersStateClean', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'hasFilters', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return $this->valueHolder81377->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer92bd3 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder81377) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder81377 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder81377->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__get', ['name' => $name], $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        if (isset(self::$publicProperties177fc[$name])) {
            return $this->valueHolder81377->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder81377;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder81377;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder81377;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder81377;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__isset', array('name' => $name), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder81377;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder81377;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__unset', array('name' => $name), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder81377;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder81377;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__clone', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        $this->valueHolder81377 = clone $this->valueHolder81377;
    }

    public function __sleep()
    {
        $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, '__sleep', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;

        return array('valueHolder81377');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer92bd3 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer92bd3;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer92bd3 && ($this->initializer92bd3->__invoke($valueHolder81377, $this, 'initializeProxy', array(), $this->initializer92bd3) || 1) && $this->valueHolder81377 = $valueHolder81377;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder81377;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder81377;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
