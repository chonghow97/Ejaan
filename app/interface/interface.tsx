export interface Term {
	a: string;
	b: string;
}

export interface vocab {
	id: string;
	vocabA: string;
	vocabB: string;
	isFav: boolean;
}

export interface VocabStore {
	vocab: (search: string) => vocab[];
	CreateVocab: (payload: Term) => vocab;
	UpdateVocab: (id: string, VocabA: string, VocabB: String) => vocab;
	DeleteVocab: (id: string) => string;
	UpdateFav: (id: string) => vocab;
}
