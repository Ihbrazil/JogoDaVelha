import { useState} from "react";
import { Pressable, View } from 'react-native';

import Casa from '../Casa';
import styles from './styles';

export default function Game() {

    const [posicaoJogo, setPosicaoJogo] = useState(new Array(9));
    const [jogadorAtual, setJogadorAtual] = useState("X");

    function defineCasaEscolhida(casa) {
      let novoArrayPosicao = posicaoJogo;
      novoArrayPosicao[casa] = jogadorAtual;
      setPosicaoJogo(novoArrayPosicao);
    }

    function defineJogadorAtual() {
        const proximoJogador = (jogadorAtual == 'X' ? 'O' : 'X');
        setJogadorAtual(proximoJogador);
    }

    function handleEscolheCasa(casa) {
        if(posicaoJogo[casa] !== undefined)
        {
            return;
        }

        defineCasaEscolhida(casa);
        defineJogadorAtual();
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(0)}>
                        <Casa
                            jogador={posicaoJogo[0]}
                            temBordaDireita={true}
                            temBordaInferior={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(1)}>
                        <Casa
                            jogador={posicaoJogo[1]}
                            temBordaDireita={true} temBordaInferior={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(2)}>
                        <Casa
                            jogador={posicaoJogo[2]}
                            temBordaInferior={true}
                        />
                    </Pressable>
                </View>

                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(3)}>
                        <Casa
                            jogador={posicaoJogo[3]}
                            temBordaDireita={true} temBordaInferior={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(4)}>
                        <Casa
                            jogador={posicaoJogo[4]}
                            temBordaDireita={true} temBordaInferior={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(5)}>
                        <Casa
                            jogador={posicaoJogo[5]}
                            temBordaInferior={true}
                        />
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(6)}>
                        <Casa
                            jogador={posicaoJogo[6]}
                            temBordaDireita={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(7)}>
                        <Casa
                            jogador={posicaoJogo[7]}
                            temBordaDireita={true}
                        />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(8)}>
                        <Casa
                            jogador={posicaoJogo[8]}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}