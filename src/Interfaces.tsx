/*export interface TodoItemProps {
  id: number;
  completed: boolean;
  text: string;
  weight: string;
  amount: string;
  price: string;
  img: string;
}*/
export interface TodoItemProps {
  id: string;
  completed?: boolean;
  text: string;
  weight: string;
  amount: string;
  price: string;
  img: string;
}
export interface TodosProps {
  todo: TodoItemProps;
}
