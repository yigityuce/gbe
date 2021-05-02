import 'reflect-metadata';
import { useContainer as rcUseContainer } from 'routing-controllers';
import { useContainer as typeOrmUseContainer } from 'typeorm';
import { Container } from 'typedi';

rcUseContainer(Container);
typeOrmUseContainer(Container);
