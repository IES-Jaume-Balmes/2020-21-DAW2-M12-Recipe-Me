<?php

namespace ContainerMOiPxUB;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder59fbe = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerc6c30 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesbe865 = [
        
    ];

    public function getConnection()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getConnection', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getMetadataFactory', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getExpressionBuilder', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'beginTransaction', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getCache', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getCache();
    }

    public function transactional($func)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'transactional', array('func' => $func), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->transactional($func);
    }

    public function commit()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'commit', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->commit();
    }

    public function rollback()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'rollback', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getClassMetadata', array('className' => $className), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'createQuery', array('dql' => $dql), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'createNamedQuery', array('name' => $name), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'createQueryBuilder', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'flush', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'clear', array('entityName' => $entityName), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->clear($entityName);
    }

    public function close()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'close', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->close();
    }

    public function persist($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'persist', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'remove', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'refresh', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'detach', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'merge', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getRepository', array('entityName' => $entityName), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'contains', array('entity' => $entity), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getEventManager', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getConfiguration', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'isOpen', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getUnitOfWork', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getProxyFactory', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'initializeObject', array('obj' => $obj), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'getFilters', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'isFiltersStateClean', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'hasFilters', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return $this->valueHolder59fbe->hasFilters();
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

        $instance->initializerc6c30 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder59fbe) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder59fbe = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder59fbe->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__get', ['name' => $name], $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        if (isset(self::$publicPropertiesbe865[$name])) {
            return $this->valueHolder59fbe->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder59fbe;

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

        $targetObject = $this->valueHolder59fbe;
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
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder59fbe;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder59fbe;
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
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__isset', array('name' => $name), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder59fbe;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder59fbe;
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
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__unset', array('name' => $name), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder59fbe;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder59fbe;
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
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__clone', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        $this->valueHolder59fbe = clone $this->valueHolder59fbe;
    }

    public function __sleep()
    {
        $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, '__sleep', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;

        return array('valueHolder59fbe');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerc6c30 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerc6c30;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerc6c30 && ($this->initializerc6c30->__invoke($valueHolder59fbe, $this, 'initializeProxy', array(), $this->initializerc6c30) || 1) && $this->valueHolder59fbe = $valueHolder59fbe;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder59fbe;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder59fbe;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
