import { VocabStore, Term, vocab } from '../interface/interface';
export const createVocabStore = (): VocabStore => {
	const term: vocab = { id: '', vocabA: '', vocabB: '', isFav: false };
	const vocab: vocab[] = [term];
	return {
		vocab: (searchVocab: string) => vocab,
		CreateVocab: (payload: Term) => term,
		UpdateVocab: (id: string, VocabA: string, VocabB: String) => term,
		DeleteVocab: (id: string) => id,
		UpdateFav: (id: string) => term,
	};
};
