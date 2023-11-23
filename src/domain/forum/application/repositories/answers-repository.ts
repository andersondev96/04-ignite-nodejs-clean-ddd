import { Answer } from '../../entreprise/entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
