import { Cardinfo } from './card.domain';

export interface Cardevent
{
  tmps:number
  parent: string
  card:Cardinfo
}