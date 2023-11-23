import { Question } from '../../entreprise/entities/question'

export interface QuestionsRepository {
  create(question: Question): Promise<void>
}
