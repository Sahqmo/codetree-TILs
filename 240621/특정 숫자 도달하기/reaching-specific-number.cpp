#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.
    int val;
    int sum = 0;
    double avg = 0;

    for (int i = 0; i < 10; i++) {
        cin >> val;
        if (val >= 250) {
            avg = (double)sum / i;
            break;
        }
        sum += val;
    }

    if (avg == 0)
        avg = (double)sum / 10;

    cout << fixed;
    cout.precision(1);
    cout << sum << " " << avg;

    return 0;
}